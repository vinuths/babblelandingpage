import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { auditCompiledCountAll } from '../../store/actions/otherActions'; // Adjust based on your project structure
import './Graph.css'; // Add your CSS here

const ComplianceBarChart = ({ branchesCompany }) => {
    const dispatch = useDispatch();

    // Fetch data from Redux store
    const statewiseCounts = useSelector((state) => state.CompCountReducer?.stateWiseCounts || {});
    const branches = useSelector((state) => state.CompCountReducer?.branches || []);
    const loading = useSelector((state) => state.CompCountReducer?.loadingcompCount);
    const error = useSelector((state) => state.CompCountReducer?.error);

    useEffect(() => {
        console.log("Updated statewiseCounts:", statewiseCounts);
    }, [statewiseCounts]); // Runs whenever statewiseCounts changes

    // State for selected filters
    const [selectedState, setSelectedState] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Fetch data on component mount or when filters change
    useEffect(() => {
        const postBody = {
            state: selectedState || '',
            branch: selectedBranch || '',
            startDate: startDate || '',
            endDate: endDate || '',
        };
        dispatch(auditCompiledCountAll(postBody));
    }, [dispatch, selectedState, selectedBranch, startDate, endDate]);

    // Calculate the complied percentage
    const compliedPercentage = selectedState && statewiseCounts[selectedState]
        ? (statewiseCounts[selectedState].complied / statewiseCounts[selectedState].total) * 100
        : (Object.values(statewiseCounts).reduce((sum, state) => sum + (state.complied || 0), 0) /
            Object.values(statewiseCounts).reduce((sum, state) => sum + (state.total || 0), 0)) * 100;

    // Prepare data for Recharts
    const data = [
        { name: 'Complied Percentage', value: isNaN(compliedPercentage) ? 0 : compliedPercentage.toFixed(2) }, // Display percentage
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="chart-container">
            <h2 className="chart-heading">Compliance Summary</h2>

            <div className="filter-container">
                {/* State Filter */}
                <div className="filter-item">
                    <label htmlFor="stateFilter">Filter by State:</label>
                    <select id="stateFilter" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                        <option value="">All States</option>
                        {Object.keys(statewiseCounts).map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                {/* Branch Filter */}
                {/* <div className="filter-item">
                    <label htmlFor="branchFilter">Filter by Branch:</label>
                    <select id="branchFilter" value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
                        <option value="">All Branches</option>
                        {branches.map(branch => (
                            <option key={branch} value={branch}>{branch}</option>
                        ))}
                    </select>
                </div> */}

                <div className="filter-container">
                    {/* State Filter */}
                    <div className="filter-item">
                        <label htmlFor="branchFilter">Filter by Branch:</label>
                        <select id="branchFilter">
                            <option value="">All Branches</option>
                            {branchesCompany.map(branch => (
                                <option key={branch._id} value={branch.name}>
                                    {branch.name} {/* Display the name of the branch */}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Start Date Filter */}
                <div className="filter-item">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                {/* End Date Filter */}
                <div className="filter-item">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Responsive Bar Chart */}
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        barSize={30} // Adjusted bar size for better spacing
                        margin={{ top: 20, right: 30, left: 0, bottom: 20 }} // Adjusted margins for better layout
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickCount={10} /> {/* Increase Y-axis ticks */}
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#013879" /> {/* Set bar color */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ComplianceBarChart;
