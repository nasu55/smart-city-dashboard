"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  listOfUsers: [];
};

const UsersTable = ({ listOfUsers: listOfUsers }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white py-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
        <>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                    Name
                  </th>

                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Email
                  </th>
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfUsers.map((packageItem: any, index) => (
                  <tr key={index}>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === listOfUsers.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {packageItem.name}
                      </h5>
                    </td>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === listOfUsers.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {packageItem.email}
                      </h5>
                    </td>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === listOfUsers.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {packageItem.contact}
                      </h5>
                    </td>

                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === listOfUsers.length - 1 ? "border-b-0" : "border-b"}`}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );
};

export default UsersTable;
