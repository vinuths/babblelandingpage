import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { auditCompiledStatusAll } from '../../store/actions/otherActions';
import './Graph.css';

const Barchart1 = ({ branchesCompany }) => {
    const dispatch = useDispatch();

    // Fetch data from Redux store
    const statewiseCounts = useSelector((state) => state.auditCompiledStatusAll11.auditData1 || {});
    const branches = useSelector((state) => state.auditCompiledStatusAll11.branches || []); // Get branches from store
    const loading = useSelector((state) => state.auditCompiledStatusAll11.loadingcompstatus);
    const error = useSelector((state) => state.auditCompiledStatusAll11.error);

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
        dispatch(auditCompiledStatusAll(postBody));
    }, [dispatch, selectedState, selectedBranch,startDate, endDate]);

    // Prepare dynamic data for Recharts
    const totalQuestions = selectedState && statewiseCounts[selectedState]
        ? statewiseCounts[selectedState].total
        : Object.values(statewiseCounts).reduce((sum, state) => sum + (state.total || 0), 0);

    const compliedQuestions = selectedState && statewiseCounts[selectedState]
        ? statewiseCounts[selectedState].complied
        : Object.values(statewiseCounts).reduce((sum, state) => sum + (state.complied || 0), 0);

    // Prepare data for Recharts
    const data = [
        { name: 'Total Count', value: totalQuestions },
        { name: 'Complied Count', value: compliedQuestions },
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="chart-container">
            {/* Heading */}
            <h2 className="chart-heading">Notice/Inspections</h2>

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
                <div className="filter-container">
            {/* State Filter */}
            <div className="filter-item">
                <label htmlFor="branchFilter">Filter by Branch:</label>
                <select id="branchFilter">
                    <option value="">All Branches</option>
                    {branchesCompany?.map(branch => (
                        <option key={branch._id} value={branch.name}>
                            {branch.name} {/* Display the name of the branch */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
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

export default Barchart1;
