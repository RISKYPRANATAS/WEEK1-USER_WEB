import React from "react";
import createHost from "cross-domain-storage/host";

const TopBarHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const storageHost = createHost([
      {
        origin: "http://localhost:5174",
        allowedMethods: ["get"],
      },
    ]);

    return () => {
      storageHost.close();
    };
  }, []);

  const handleRoleSelection = (role) => {
    localStorage.setItem("role", role);
    window.location.href = "http://localhost:5174";
  };

  return (
    <div className="bg-primary text-white text-xs hidden sm:text-sm sm:flex sm:justify-between sm:items-center sm:p-2 lg:px-5 lg:py-3">
      <h1>Telkom University</h1>
      <span onClick={handleDropdown} className="cursor-pointer">
        Masuk
      </span>

      {isOpen && (
        <div className="absolute right-0 top-[35.5px] lg:top-11 bg-primary">
          <ul className="flex flex-col gap-y-5 items-end">
            <div
              onClick={() => handleRoleSelection("kaprodi")}
              className="hover:bg-red-600 cursor-pointer p-3 w-full"
            >
              <span>Kaprodi</span>
            </div>
            <div
              onClick={() => handleRoleSelection("dosen")}
              className="hover:bg-red-600 cursor-pointer p-3 w-full"
            >
              <span>Dosen</span>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBarHeader;
