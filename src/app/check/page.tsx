"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Check = () => {
  const [showReservation, setShowReservation] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowReservation(true);
    }, 1500);

    setTimeout(() => {
      setShowQRCode(true);
    }, 3000);

    setTimeout(() => {
      setShowEmail(true);
    }, 4500);
  }, []);

  return (
    <div>
      <main className="h-screen">
        {!showReservation && !showQRCode && !showEmail && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {showReservation && (
          <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-16 w-9/12 animate-fade-in">
            <div className="flex justify-center font-bold text-xl">
              予約完了
            </div>
            <div className="flex gap-8 mt-10">
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
              </div>
              <div className="space-y-2 text-gray-700 ml-10">
                <p>
                  <span className="font-bold">店舗住所:</span>{" "}
                  東京都渋谷区渋谷1-1-1
                </p>
                <p>
                  <span className="font-bold">アクセス:</span> 渋谷駅徒歩3分
                </p>
                <p>
                  <span className="font-bold">コース内容:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>季節の前菜5種盛り合わせ</li>
                  <li>特選お造り5種</li>
                  <li>焼物 - 銀だらの西京焼き</li>
                  <li>煮物 - 金目鯛の煮付け</li>
                  <li>食事 - 特選土鍋ご飯</li>
                  <li>デザート</li>
                </ul>
                <p>
                  <span className="font-bold">飲み放題:</span>{" "}
                  生ビール、日本酒、焼酎、ワイン、ソフトドリンク
                </p>
                <p>
                  <span className="font-bold">予約人数:</span> 4名
                </p>
                <p>
                  <span className="font-bold">合計金額:</span> ¥22,000（税込）
                </p>
              </div>
            </div>
          </div>
        )}

        {!showQRCode && showReservation && (
          <div className="flex justify-center items-center h-32 mt-16">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {showQRCode && (
          <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-16 w-9/12 animate-fade-in">
            <div className="flex justify-center items-center font-bold text-xl">
              <Image src="/paypay.png" alt="PayPay" width={100} height={30} />{" "}
              QRコード発行完了
            </div>
            <div className="flex justify-center font-bold text-xl mt-5">
              <Image
                src="/paypayqr.png"
                alt="QRコード"
                width={300}
                height={300}
              />
            </div>
          </div>
        )}

        {!showEmail && showQRCode && (
          <div className="flex justify-center items-center h-32 mt-16">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {showEmail && (
          <div className="mx-auto rounded-3xl border border-gray-200 shadow-xl p-8 bg-white/50 mt-16 w-9/12 animate-fade-in">
            <div className="flex justify-center font-bold text-xl mb-6">
              メール送付完了
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mx-8 font-mono overflow-auto shadow-lg">
              <p className="mb-4">件名: 【幹事くん】飲み会のご案内</p>
              <div className="whitespace-pre-wrap text-gray-700">
                {`From: 幹事くん <kanji@kanjiapp.com>
To: yamada@example.com, sato@example.com, suzuki@example.com, tanaka@example.com

山田さん、佐藤さん、鈴木さん、田中さん

お疲れ様です。
XXXです。

以下の内容で予約が完了しましたので、ご確認をお願いいたします。

【店舗情報】
店舗名: 割烹 ほげほげ
住所: 東京都渋谷区渋谷1-1-1
アクセス: 渋谷駅徒歩3分

【予約内容】
日時: 2024年○月○日(○) 19:00～
コース: 贅沢鮮魚コース (2.5時間飲み放題付)
料金: お一人様 ¥5,500
参加人数: 4名
合計金額: ¥22,000（税込）

【コース内容】
・季節の前菜5種盛り合わせ
・特選お造り5種
・焼物 - 銀だらの西京焼き
・煮物 - 金目鯛の煮付け
・食事 - 特選土鍋ご飯
・デザート

【お支払いについて】
PayPayでのお支払いをお願いいたします。
以下のQRコードをご利用ください。`}
              </div>
              <div className="ml-4 my-4">
                <Image
                  src="/paypayqr.png"
                  alt="PayPay QRコード"
                  width={200}
                  height={200}
                />
              </div>
              <div className="whitespace-pre-wrap text-gray-700">
                {`ご不明な点がございましたら、お気軽にご連絡ください。
皆様のご参加を心よりお待ちしております。`}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Check;
