import { useState } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ handleChange }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    handleChange(event);
    setSelectedRole(event.target.value);
  };

  return (
    <div
      className="relative mb-6"
      data-te-input-wrapper-init>
      <label
        htmlFor="role"
        className="block text-neutral-500 mb-2 dark:text-neutral-200">
        Role
      </label>
      <select
        id="role"
        className="peer block min-h-[2rem] w-[calc(100% + 0.75rem)] rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 w-full"
        value={selectedRole}
        onChange={handleRoleChange}>
        <option value="">Select User Type</option>
        <option value="school">School</option>
        <option value="distributor">Distributor</option>
      </select>

      {selectedRole === 'school' && (
        <div>
          <label
            htmlFor="schoolName"
            className="block text-neutral-500 mb-2 dark:text-neutral-200">
            School Name
          </label>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="schoolName"
            placeholder="Enter your school name"
            onChange={handleChange}
          />
        </div>
      )}
      {selectedRole === 'distributor' && (
        <div>
          <label
            htmlFor="companyName"
            className="block text-neutral-500 mb-2 dark:text-neutral-200">
            Company Name
          </label>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="companyName"
            placeholder="Enter your company name"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default DropDown;
