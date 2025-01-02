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
    }, [dispatch, selectedState, selectedBranch, startDate, endDate]);

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
        <div>
            <div className='chart-container' style={{ height: '500px' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#013879' }}>Notice/Inspections</h2>
                <div>
                    <div className="filters" style={{ width: "100%", }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="filter-item" >

                                    <label htmlFor="stateFilter">Filter by State:</label>
                                    <select
                                        id="stateFilter"
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                    >
                                        <option value="">All States</option>
                                        {Object.keys(statewiseCounts).map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="filter-item" >

                                    <label htmlFor="branchFilter">Filter by Branch:</label>
                                    <select id="branchFilter">
                                        <option value="">All Branches</option>
                                        {branchesCompany?.map(branch => (
                                            <option key={branch._id} value={branch.name}>
                                                {branch.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="startDate">Date Range:</label>
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    {/* <label htmlFor="startDate">Start Date:</label> */}
                                    <input
                                        type="date"
                                        id="startDate"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    {/* <label htmlFor="endDate">End Date:</label> */}
                                    <input
                                        type="date"
                                        id="endDate"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                barSize={30}
                                margin={{ top: 20, right: 0, left: -10, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickCount={10} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#013879" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Barchart1;