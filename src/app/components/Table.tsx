"use client";

import React, { useState } from "react";

const Table = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "山田太郎", contact: "yamada@example.com" },
    { id: 2, name: "佐藤花子", contact: "sato@example.com" },
    { id: 3, name: "鈴木一郎", contact: "suzuki@example.com" },
  ]);

  const addNewMember = () => {
    const newId = members.length + 1;
    setMembers([...members, { id: newId, name: "", contact: "" }]);
  };

  const handleDoubleClick = () => {
    addNewMember();
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-3"></th>
              <th className="border border-gray-300 px-6 py-3">氏名</th>
              <th className="border border-gray-300 px-6 py-3">連絡先</th>
            </tr>
          </thead>
          <tbody onDoubleClick={handleDoubleClick}>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border border-gray-300 px-6 py-3 text-center">
                  {member.id}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => {
                      const newMembers = members.map((m) =>
                        m.id === member.id ? { ...m, name: e.target.value } : m
                      );
                      setMembers(newMembers);
                    }}
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="名前を入力"
                  />
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  <input
                    type="text"
                    value={member.contact}
                    onChange={(e) => {
                      const newMembers = members.map((m) =>
                        m.id === member.id
                          ? { ...m, contact: e.target.value }
                          : m
                      );
                      setMembers(newMembers);
                    }}
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="メールアドレスを入力"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
