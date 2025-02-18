import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadNoticesExcel } from '../../store/actions/otherActions';

const ExcelDownload = () => {
  const dispatch = useDispatch();

  // State for dropdown values
  const [region, setRegion] = useState('AllRegion');
  const [branch, setBranch] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [state, setState] = useState('');

  // Get loading and error states from Redux
  const { loading, error } = useSelector((state) => state.noticeDownloadRed);

  // Mock data for dropdowns (replace with actual API data)
  const regions = [
    { value: '', label: 'AllRegion' },
    { value: 'South', label: 'South' },
  ];

  const branches = [
    { value: 'Branch1', label: 'Branch 1' },
    { value: 'Branch2', label: 'Branch 2' },
  ];

  const fieldNames = [
    { value: 'notices_count', label: 'Notices Count' },
    { value: 'complied_count', label: 'Complied Count' },
    { value: 'pending_count', label: 'Pending Count' },
  ];

  const states = [
    { value: 'State1', label: 'State 1' },
    { value: 'State2', label: 'State 2' },
  ];

  // Handle form submission
  const handleDownload = (e) => {
    e.preventDefault();

    const payload = {
      region:'AllRegions',
      branch:'679081105c0b83d01990b298',
      from,
      to,
      fieldName:'notices_count',
      state:'Gujarat',
    };

    dispatch(downloadNoticesExcel(payload));
  };

  return (
    <div>
      <h1>Download Notices Excel</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleDownload}>
        <select
          label="Region"
          options={regions}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <select
          label="Branch"
          options={branches}
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
        <div>
          <label>From Date</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div>
          <label>To Date</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <select
          label="Field Name"
          options={fieldNames}
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
        <select
          label="State"
          options={states}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Downloading...' : 'Download Excel'}
        </button>
      </form>
    </div>
  );
};

export default ExcelDownload;