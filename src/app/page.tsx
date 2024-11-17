"use client";

import Table from "./components/Table";
import TextBox from "./components/TextBox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showMembers, setShowMembers] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMembers(true);
      setLoading(false);
    }, 1500);
  };

  const handleConfirmMembers = () => {
    setLoading(true);
    setTimeout(() => {
      setShowRestaurants(true);
      setLoading(false);
    }, 1500);
  };

  const handleReservation = () => {
    router.push("/check");
  };

  return (
    <div>
      <main className="h-screen">
        <div className="flex justify-center text-4xl font-bold">幹事くん</div>
        <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-8 w-9/12">
          <TextBox />
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSearchRestaurants}
              className="px-8 py-4 text-xl text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600 transform hover:scale-105 transition duration-200 ease-in-out"
            >
              お店を予約して
            </button>
          </div>
        </div>

        {loading && !showMembers && !showRestaurants && (
          <div className="flex justify-center items-center mt-16">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {showMembers && (
          <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-16 w-9/12 animate-fade-in">
            <div className="flex justify-center font-bold text-xl">
              参加者は以下のメンバーですか？
            </div>
            <Table />
            <div className="flex justify-center mt-6">
              <button
                onClick={handleConfirmMembers}
                className="px-8 py-4 text-xl text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600 transform hover:scale-105 transition duration-200 ease-in-out"
              >
                このメンバーで予約して
              </button>
            </div>
          </div>
        )}

        {loading && showMembers && !showRestaurants && (
          <div className="flex justify-center items-center mt-16">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {showRestaurants && (
          <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-16 w-9/12 animate-fade-in">
            <div className="flex justify-center font-bold text-xl">
              要望にマッチする店が見つかりました！
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex gap-8">
                <div className="rounded-2xl border border-gray-200 shadow-xl p-6 bg-white/50 w-96">
                  <Image
                    src="/restaurant1.png"
                    alt="和食レストラン1"
                    width={384}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">
                    和食居酒屋 ほげほげ
                  </h3>
                  <p className="text-gray-600 mb-1">¥4,500/人</p>
                  <p className="text-gray-600 mb-4">
                    季節の会席コース 2時間飲み放題付
                  </p>
                  <button
                    onClick={handleReservation}
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600 transform hover:scale-105 transition duration-200 ease-in-out"
                  >
                    この店を予約
                  </button>
                </div>

                <div className="rounded-2xl border border-gray-200 shadow-xl p-6 bg-white/50 w-96">
                  <Image
                    src="/restaurant2.png"
                    alt="和食レストラン2"
                    width={384}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">割烹 ほげほげ</h3>
                  <p className="text-gray-600 mb-1">¥5,500/人</p>
                  <p className="text-gray-600 mb-4">
                    贅沢鮮魚コース 2.5時間飲み放題付
                  </p>
                  <button
                    onClick={handleReservation}
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600 transform hover:scale-105 transition duration-200 ease-in-out"
                  >
                    この店を予約
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
