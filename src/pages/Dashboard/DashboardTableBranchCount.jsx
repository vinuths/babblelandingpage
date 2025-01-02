import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegionWiseDataGet, DashboardBranchGet } from '../../store/actions/otherActions'; // Assuming your action is in this file
import { Table, Input, Button, Space, Select, Tooltip, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import './Region.css';
import { useNavigate } from 'react-router-dom';

const DashboardTableBranchCount = () => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const searchInput = useRef(null); // Define the useRef hook here
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState('AllRegions');
  const [selectedFieldName, setSelectedFieldName] = useState('isTradeLicense');

  const [selectedState, setSelectedState] = useState('Andhra Pradesh');
  const [selectedLicense, setSelectedLicense] = useState('isTradeLicense');
  const [selectedFieldName1, setSelectedFieldName1] = useState('license_obtained');
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [dataSource1, setDataSource1] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);


  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalPayload, setModalPayload] = useState(null);


  // const regionWiseData = useSelector((state) => state.RegionWiseDataGetRed);
  // const { RegionWiseDataInfo, loadingRegionWiseData, error } = regionWiseData;
  const RegionWiseDataGetRed = useSelector((state) => state.RegionWiseDataGetRed);
  const { loadingRegionWiseData, RegionWiseDataInfo, error } = RegionWiseDataGetRed;
  const DashStateWiseDataRed = useSelector((state) => state.DashStateWiseDataRed);
  const { loadingDashStateWiseData, DashStateWiseDataInfo, errorDBB } = DashStateWiseDataRed;
  console.log("DashStateWiseDataInfo", "");

  // useEffect(() => {
  //   dispatch(RegionWiseDataGet({
  //     selectedRegion: 'SouthRegion',
  //     selectedFieldName: 'isTradeLicense',
  //   }));
  // }, [dispatch]);


  // useEffect(() => {
  //   if (selectedState && selectedFieldName1 && selectedLicense) {
  //     console.log("Dispatching DashboardBranchGet with:");
  //     console.log("Selected State:", selectedState);
  //     console.log("Selected Field Name:", selectedFieldName1);
  //     console.log("Selected License:", selectedLicense);

  //     dispatch(DashboardBranchGet(selectedState, selectedFieldName1, selectedLicense));
  //   } else {
  //     console.log("One or more dependencies are missing:");
  //     console.log("Selected State:", selectedState);
  //     console.log("Selected Field Name:", selectedFieldName1);
  //     console.log("Selected License:", selectedLicense);
  //   }
  // }, [dispatch, selectedState, selectedFieldName1, selectedLicense]);


  useEffect(() => {
    if (selectedRegion && selectedFieldName) {
      dispatch(RegionWiseDataGet(selectedRegion, selectedFieldName));
    }
  }, [dispatch, selectedRegion, selectedFieldName]);

  // Mapping regionKey to their full region names
  const regionNames = {
    SouthRegion: "South Region",
    NorthRegion: "North Region",
    EastRegion: "East Region",
    WestRegion: "West Region",
    // Add more mappings as needed
  };

  //   useEffect(() => {
  //     let allRegionArr = [];

  //     if (typeof (RegionWiseDataInfo) !== 'undefined') {
  //         RegionWiseDataInfo.map((regionItem, index) => {
  //             const regionData = {
  //                 key: index + 1,
  //                 region: regionItem.region,
  //                 branches_total_count: regionItem.totals.branches_total_count,
  //                 branches_not_applicable: regionItem.totals.branches_not_applicable,
  //                 branches_license_not_in_scope: regionItem.totals.branches_license_not_in_scope,
  //                 branches_applicable: regionItem.totals.branches_applicable,
  //                 branches_license_obtained: regionItem.totals.branches_license_obtained,
  //                 branches_new_license_applied: regionItem.totals.branches_new_license_applied,
  //                 branches_license_applied_for_renewal: regionItem.totals.branches_license_applied_for_renewal,
  //                 branches_license_to_be_applied: regionItem.totals.branches_license_to_be_applied,
  //                 statewiseData: regionItem.statewiseData.map((stateItem, stateIndex) => ({
  //                     key: `state-${index + 1}-${stateIndex + 1}`,
  //                     state: stateItem.state,
  //                     total_count: stateItem.total_count,
  //                     not_applicable: stateItem.not_applicable,
  //                     license_not_in_scope: stateItem.license_not_in_scope,
  //                     applicable: stateItem.applicable,
  //                     license_obtained: stateItem.license_obtained,
  //                     new_license_applied: stateItem.new_license_applied,
  //                     license_applied_for_renewal: stateItem.license_applied_for_renewal,
  //                     license_to_be_applied: stateItem.license_to_be_applied,
  //                     per_completed: stateItem.per_completed,
  //                     remarks: stateItem.remarks,
  //                 }))
  //             };

  //             // Add the region data to the allRegionArr
  //             allRegionArr.push(regionData);
  //         });
  //     }

  //     // Set the dataSource after processing the region and statewise data
  //     setDataSource(allRegionArr);
  // }, [RegionWiseDataInfo]);
  ; // Ensure this dependency is correct



  useEffect(() => {
    let allRegionArr = [];
    if (typeof (RegionWiseDataInfo) !== 'undefined' && RegionWiseDataInfo?.length > 0) {
      RegionWiseDataInfo.map((item, index) => {
        allRegionArr.push({
          key: index + 1,
          // id: item._id,
          state: item.state,
          license: item.license,
          branchdistrict: item.branchdistrict,
          total_count: item.total_count,
          not_applicable: item.not_applicable,
          license_not_in_scope: item.license_not_in_scope,
          applicable: item.applicable,
          license_obtained: item.license_obtained,
          new_license_applied: item.new_license_applied,
          license_applied_for_renewal: item.license_applied_for_renewal,
          license_to_be_applied: item.license_to_be_applied,
          license_due_for_renewal: item.license_due_for_renewal,
          license_experied: item.license_experied,
          per_completed: item.per_completed + "%"

        })
      });
    }
    setDataSource(allRegionArr);
  }, [RegionWiseDataInfo])
  useEffect(() => {
    let allStateArr = [];
    if (typeof (DashStateWiseDataInfo) !== 'undefined' && DashStateWiseDataInfo?.length > 0) {
      console.log("HERE DashStateWiseDataInfo", DashStateWiseDataInfo);

      DashStateWiseDataInfo.map((item, index) => {
        allStateArr.push({
          key: index + 1,
          // id: item._id,
          state: item.branchstate,
          // license: item.license,

        })
      });
    }
    setDataSource1(allStateArr);
  }, [DashStateWiseDataInfo])


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small">
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const filteredData = selectedRegion
    ? dataSource.filter((data) => data.region === selectedRegion)
    : dataSource;




  // Open modal and set payload
  const openModal = (payload, fetchedData) => {
    setModalPayload(payload); // Save the payload to state
    console.log("setModalPayload", payload);

    setModalVisible(true); // Open the modal
    setFetchedData(fetchedData)
  };
  const openModal1 = (payload, fetchedData) => {
    setModalPayload(payload); // Save the payload to state
    console.log("setModalPayload", payload);

    setModalVisible1(true); // Open the modal
    setFetchedData(fetchedData)
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
    setModalPayload(null); // Clear payload after modal close
  };
  // Close the modal
  const closeModal1 = () => {
    setModalVisible1(false);
    setModalPayload(null); // Clear payload after modal close
  };

  // Modal content
  // Modal content with Ant Design table
  const renderModalContent = () => {
    // Default columns for the table
    let columns = [
      {
        title: 'Branch Name',
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps("name"),
      },
      {
        title: 'Branch State',
        dataIndex: ['branchstate', 'name'], // Access nested object property
        key: 'branchstate',
        ...getColumnSearchProps("branchstate"),

      },
      {
        title: 'Branch District',
        dataIndex: 'branchdistrict',
        key: 'branchdistrict',
        ...getColumnSearchProps("branchdistrict"),

      },
    ];

    // Dynamic column mapping based on the selected field name
    if (selectedFieldName === 'isTradeLicense') {
      columns.push({
        title: 'View Trade License',
        dataIndex: 'issuingauthimageTL', // This will contain the file URL or path
        key: 'issuingauthimageTL',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View Trade License</a> : 'Not Uploaded'
        ),
      });
    } else if (selectedFieldName === 'isNightShiftPermission') {
      columns.push({
        title: 'View NightShift Permission',
        dataIndex: 'issuingauthimageNSP',
        key: 'issuingauthimageNSP',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View NightShift Permission</a> : 'Not Uploaded'
        ),
      });
    } else if (selectedFieldName === 'isOTPermission') {
      columns.push({
        title: 'View OT Permission',
        dataIndex: 'issuingauthimageOTP',
        key: 'issuingauthimageOTP',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View OT Permission</a> : 'Not Uploaded'
        ),
      });
    } else if (selectedFieldName === 'isWeeklyOffExemption') {
      columns.push({
        title: 'View Weekly Off Exemption',
        dataIndex: 'issuingauthimageWOE',
        key: 'issuingauthimageWOE',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View Weekly Off Exemption</a> : 'Not Uploaded'
        ),
      });
    } else if (selectedFieldName === 'Factory') {
      columns.push({
        title: 'View Factory License',
        dataIndex: 'issuingauthimage1',
        key: 'issuingauthimage1',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View Factory License</a> : 'Not Uploaded'
        ),
      });
    } else if (selectedFieldName === 'SE') {
      columns.push({
        title: 'View S&E License',
        dataIndex: 'issuingauthimage',
        key: 'issuingauthimage',
        render: (file) => (
          file ? <a href={file} target="_blank" rel="noopener noreferrer">View S&E License</a> : 'Not Uploaded'
        ),
      });
    }


    if (selectedFieldName === 'isTradeLicense') {
      columns.push({
        title: 'DOE Trade License',
        dataIndex: 'doeTL',
        key: 'doeTL',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doeTL ? new Date(a.doeTL).getTime() : 0;
          const dateB = b.doeTL ? new Date(b.doeTL).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    } else if (selectedFieldName === 'isNightShiftPermission') {
      columns.push({
        title: 'DOE NightShift Permission',
        dataIndex: 'doeNSP',
        key: 'doeNSP',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doeNSP ? new Date(a.doeNSP).getTime() : 0;
          const dateB = b.doeNSP ? new Date(b.doeNSP).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    } else if (selectedFieldName === 'isOTPermission') {
      columns.push({
        title: 'DOE OT Permission',
        dataIndex: 'doeOTP',
        key: 'doeOTP',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doeOTP ? new Date(a.doeOTP).getTime() : 0;
          const dateB = b.doeOTP ? new Date(b.doeOTP).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    } else if (selectedFieldName === 'isWeeklyOffExemption') {
      columns.push({
        title: 'DOE Weekly Off Exemption',
        dataIndex: '',
        key: 'doeWOE',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doeWOE ? new Date(a.doeWOE).getTime() : 0;
          const dateB = b.doeWOE ? new Date(b.doeWOE).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    } else if (selectedFieldName === 'Factory') {
      columns.push({
        title: 'DOE Factory License',
        dataIndex: 'doe1',
        key: 'doe1',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doe1 ? new Date(a.doe1).getTime() : 0;
          const dateB = b.doe1 ? new Date(b.doe1).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    } else if (selectedFieldName === 'SE') {
      columns.push({
        title: 'DOE S&E License',
        dataIndex: 'doe',
        key: 'doe',
        render: (date) => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date
        sorter: (a, b) => {
          const dateA = a.doe ? new Date(a.doe).getTime() : 0;
          const dateB = b.doe ? new Date(b.doe).getTime() : 0;
          return dateA - dateB;
        },
        sortDirections: ["descend", "ascend"],
      });
    }

    // Adjust columns if the payload fieldName is 'total_count'
    if (modalPayload && modalPayload.fieldName === 'total_count') {
      columns = [
        {
          title: 'Branch Name',
          dataIndex: 'name',
          key: 'name',
        },
      ];
    }

    // Check if modalPayload (DashStateWiseDataInfo) is defined and has data
    if (!fetchedData || fetchedData.length === 0) {
      return <p>No data available.</p>;
    }

    return (
      <Table
        columns={columns}
        dataSource={fetchedData.map((item) => ({
          ...item,
          key: item._id, // Set the unique key for each row
        }))}
        pagination={{ pageSize: 5 }} // Enable pagination with 5 rows per page
        scroll={{ y: 500, x: 800 }}
      />
    );
  };

  const renderModalContent1 = () => {
    // Define a default set of columns
    let columns = [
      {
        title: 'Branch Name',
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps("name"),

      },
    ];



    // Check if modalPayload (DashStateWiseDataInfo) is defined and has data
    if (!fetchedData || fetchedData.length === 0) {
      return <p>No data available.</p>;
    }

    return (
      <Table
        columns={columns}
        dataSource={fetchedData.map((item) => ({
          ...item,
          key: item._id, // Set the unique key for each row
        }))}
        pagination={false} // Enable pagination with 5 rows per page
      // scroll={{ y: 500, x: 800 }}
      />
    );
  };







  const handleCellClick1 = (record, column) => {
    console.log("record", record);
    const { state, license } = record;

    const payload = {
      state: state,
      fieldName: column,
      license: license,
    };

    // const dispatch = useDispatch();

    // Dispatch the action to fetch data and then open modal with the fetched data
    dispatch(DashboardBranchGet(state, column, license))
      .then((fetchedData) => {
        // openModal(fetchedData, payload); // Pass the fetched data to openModal
        openModal1(fetchedData, payload); // Pass the fetched data to openModal
        console.log("Fetched Data:", fetchedData);
        setFetchedData(fetchedData, payload)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Optionally, you can still open the modal here if needed with a default payload or other logic
    // openModal(dataSource1);
    openModal1(dataSource1);
    console.log("Initial Payload", payload);
  };
  const handleCellClick = (record, column) => {
    console.log("record", record);
    const { state, license } = record;

    const payload = {
      state: state,
      fieldName: column,
      license: license,
    };

    // const dispatch = useDispatch();

    // Dispatch the action to fetch data and then open modal with the fetched data
    dispatch(DashboardBranchGet(state, column, license))
      .then((fetchedData) => {
        openModal(fetchedData, payload); // Pass the fetched data to openModal
        setFetchedData(fetchedData, payload)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Optionally, you can still open the modal here if needed with a default payload or other logic
    openModal(dataSource1);
    console.log("Initial Payload", payload);
  };



  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleFieldNameChange = (event) => {
    setSelectedFieldName(event.target.value);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };







  const columns = [
    {
      title: (
        <Tooltip title="State of the data">State</Tooltip>
      ),
      dataIndex: 'state',
      key: 'state',
      width: 100,
      align: 'center',
      // onCell: (record) => ({
      //   onClick: () => handleCellClick(record, 'state'),
      // }),
    },
    {
      title: (
        <Tooltip title="Total count of records">T C</Tooltip>
      ),
      dataIndex: 'total_count',
      key: 'total_count',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick1(record, 'total_count'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records that are not applicable">N A</Tooltip>
      ),
      dataIndex: 'not_applicable',
      key: 'not_applicable',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick1(record, 'not_applicable'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records that are not in scope">N I S</Tooltip>
      ),
      dataIndex: 'license_not_in_scope',
      key: 'license_not_in_scope',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick1(record, 'license_not_in_scope'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Applicable records for licensing">App.</Tooltip>
      ),
      dataIndex: 'applicable',
      key: 'applicable',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick1(record, 'applicable'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records with obtained licenses">OB</Tooltip>
      ),
      dataIndex: 'license_obtained',
      key: 'license_obtained',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'license_obtained'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records with new licenses applied">New</Tooltip>
      ),
      dataIndex: 'new_license_applied',
      key: 'new_license_applied',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick1(record, 'new_license_applied'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records that are applied for renewal">A F R</Tooltip>
      ),
      dataIndex: 'license_applied_for_renewal',
      key: 'license_applied_for_renewal',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'license_applied_for_renewal'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records that are to be applied for license">TB App</Tooltip>
      ),
      dataIndex: 'license_to_be_applied',
      key: 'license_to_be_applied',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'license_to_be_applied'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Records due for renewal">R D</Tooltip>
      ),
      dataIndex: 'license_due_for_renewal',
      key: 'license_due_for_renewal',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'license_due_for_renewal'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Expired licenses">Exp.</Tooltip>
      ),
      dataIndex: 'license_experied',
      key: 'license_experied',
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'license_experied'),
        className: 'clickable-cell', // Styling for pointer cursor and clickable effect
      }),
    },
    {
      title: (
        <Tooltip title="Percentage of completion">Comp</Tooltip>
      ),
      dataIndex: 'per_completed',
      key: 'per_completed',
      align: 'center',
      // onCell: (record) => ({
      //   onClick: () => handleCellClick(record, 'per_completed'),
      // }),
    },
  ];





  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="chart-heading">Registrations & Licenses
        </h2>
      </div>

      <div className="dashboard-content">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filter-group">
            <label htmlFor="region" className="filter-label">Select Region:</label>
            <select
              id="region"
              className="filter-select"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="AllRegions">All Regions</option>
              <option value="SouthRegion">South Region</option>
              <option value="NorthRegion">North Region</option>
              <option value="WestRegion">West Region</option>
              <option value="EastRegion">East Region</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="fieldName" className="filter-label">Select License:</label>
            <select
              id="fieldName"
              className="filter-select"
              value={selectedFieldName}
              onChange={handleFieldNameChange}
            >
              <option value="isNightShiftPermission">Night Shift Permission</option>
              <option value="isOTPermission">OT Permission</option>
              <option value="isWeeklyOffExemption">Weekly Off Permission</option>
              <option value="isTradeLicense">Trade License</option>
              <option value="Factory">Factory License</option>
              <option value="SE">S&E License</option>
            </select>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="data-section">
          {loadingRegionWiseData ? (
            <div className="loading-indicator">Loading...</div>
          ) : error ? (
            <div className="error-message">Error: {error}</div>
          ) : (
            <div className="table-wrapper">
              <Table
                columns={columns}
                // columns={columns.map(col => ({
                //   ...col,
                //   onCell: (record) => ({
                //     onClick: () => handleCellClick(record, col.dataIndex), // Handle cell click
                //   }),
                // }))}
                dataSource={dataSource}
                pagination={false}
                position={["center"]}
                scroll={{ y: 500, x: 1000 }}
                className="data-table"
                summary={() => {
                  const totalApplicable = dataSource.reduce((sum, row) => sum + row.applicable, 0); //
                  const totalCount = dataSource.reduce((sum, row) => sum + row.total_count, 0);
                  const totalObtained = dataSource.reduce((sum, row) => sum + row.license_obtained, 0); //
                  const totalRenewal = dataSource.reduce((sum, row) => sum + row.license_applied_for_renewal, 0); // 
                  const totalNotInScope = dataSource.reduce((sum, row) => sum + row.license_not_in_scope, 0); //
                  const totalToBeApplied = dataSource.reduce((sum, row) => sum + row.license_to_be_applied, 0);    // 
                  const totalNewApplied = dataSource.reduce((sum, row) => sum + row.new_license_applied, 0);  //
                  const totalNotApplicable = dataSource.reduce((sum, row) => sum + row.not_applicable, 0);
                  const licenseDueForRenewal = dataSource.reduce((sum, row) => sum + row.license_due_for_renewal, 0);
                  const licenseExperied = dataSource.reduce((sum, row) => sum + row.license_experied, 0);
                  const totalPercentageCompleted = dataSource.reduce(
                    (sum, row) => sum + parseFloat(row.per_completed || 0),
                    0
                  );
                  const averagePerCompleted = (totalPercentageCompleted / dataSource.length || 0).toFixed(2);

                  return (
                    <Table.Summary.Row style={{ fontWeight: 'bold', backgroundColor: 'lightGrey', textAlign: 'center', fontSize: 'small' }}>
                      <Table.Summary.Cell index={0} >Total</Table.Summary.Cell>
                      <Table.Summary.Cell index={1} >{totalCount}</Table.Summary.Cell>
                      <Table.Summary.Cell index={7} >{totalNotApplicable}</Table.Summary.Cell>
                      <Table.Summary.Cell index={4} >{totalNotInScope}</Table.Summary.Cell>
                      <Table.Summary.Cell index={1} >{totalApplicable}</Table.Summary.Cell>
                      <Table.Summary.Cell index={2} >{totalObtained}</Table.Summary.Cell>
                      <Table.Summary.Cell index={6} >{totalNewApplied}</Table.Summary.Cell>
                      <Table.Summary.Cell index={3} >{totalRenewal}</Table.Summary.Cell>
                      <Table.Summary.Cell index={5} >{totalToBeApplied}</Table.Summary.Cell>
                      <Table.Summary.Cell index={8} >{licenseDueForRenewal}</Table.Summary.Cell>
                      <Table.Summary.Cell index={9} >{licenseExperied}</Table.Summary.Cell>
                      <Table.Summary.Cell index={10}>
                        {averagePerCompleted + '%'}
                      </Table.Summary.Cell>



                    </Table.Summary.Row>
                  );
                }}
              />
              <Modal
                className='dashboard_wrapper container'
                title="Branch Details"
                visible={modalVisible}
                onCancel={closeModal}
                footer={null}
                width={900}
              >
                {renderModalContent()}
              </Modal>
              <Modal
                className="dashboard_wrapper container"
                title="Branch Details"
                visible={modalVisible1}
                onCancel={closeModal1}
                footer={null}
                width={400}
                bodyStyle={{ height: '300px', overflowY: 'auto' }}  // Set height of the body content
              >
                {renderModalContent1()}
              </Modal>

            </div>
          )}

        </div>
      </div>
    </div>



  );
};

export default DashboardTableBranchCount;