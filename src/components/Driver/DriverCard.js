import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DriverCard = (props) => {
  const { driver } = props;

  const DataDisplay = ({ label, value }) => (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-md font-semibold -mt-1 break-all">{value}</p>
    </div>
  );

  const Divider = () => (
    <div className="relative mt-3">
      <div className="absolute inset-x-0 bottom-0 left-[-1.5rem] right-[-1rem]">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );

  return (
    <div className="flex-none w-1/2 lg:w-1/3 xl:w-1/4 h-96 min-h-full">
      <div
        key={driver.login.uuid}
        className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm min-h-full"
      >
        <div className="py-2">
          <div className="flex justify-between">
            <div className="space-x-2">
              <span className="text-gray-500 text-md">Driver ID</span>
              <span className="text-red-500 text-md font-bold break-all">
                {driver.login.uuid.substring(0, 8).toUpperCase()}
              </span>
            </div>
            <MoreOutlined />
          </div>

          <Divider />
        </div>
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <LazyLoadImage
              src={driver.picture.thumbnail}
              width={600}
              height={400}
              alt="Image Alt"
              className="rounded-full w-full h-full object-cover min-w-4 min-h-4"
            />
          </div>
        </div>
        <div className="space-y-2">
          <DataDisplay
            label="Nama Driver"
            value={`${driver.name.first} ${driver.name.last}`}
          />
          <DataDisplay label="Telepon" value={driver.phone} />
          <DataDisplay label="Email Address" value={driver.email} />
          <DataDisplay
            label="Tanggal Lahir"
            value={new Date(driver.dob.date).toLocaleDateString()}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
