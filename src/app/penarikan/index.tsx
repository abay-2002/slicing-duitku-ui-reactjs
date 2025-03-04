import { useState } from "react";

export default function PenarikanPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [bank, setBank] = useState("Bank BCA ******");

    const withdrawalHistory = [
        { id: '29797773', date: '29/09/2021 11.19.29', amount: '10.000,00', fee: '0,00', status: 'Done', bank: 'Bank Mandiri' },
        { id: '28746136', date: '10/09/2021 09.22.58', amount: '13.500,00', fee: '6.500,00', status: 'Done', bank: 'Bank BCA' },
        { id: '20026399', date: '23/02/2021 20.52.52', amount: '100.000,00', fee: '0,00', status: 'Done', bank: 'Bank BNI' },
        { id: '19230942', date: '02/02/2021 12.31.50', amount: '100.000,00', fee: '0,00', status: 'Done', bank: 'Bank BRI' },
    ];

    return (
        <>
            <div className="py-6">
                <h1 className="text-2xl font-medium text-gray-700">Penarikan</h1>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-medium text-blue-500 mb-4">PERMINTAAN PENARIKAN</h2>
                <div className="mb-6">
                    <p className="text-gray-700 mb-1">
                        Saldo yang dapat ditarik saat ini sebesar <span className="text-red-500 font-bold">Rp 68.021.425,1</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Nominal</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Rp 0"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Bank</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md" value={bank} onChange={(e) => setBank(e.target.value)}>
                                <option>Bank BCA ******</option>
                                <option>Bank Mandiri ******</option>
                                <option>Bank BNI ******</option>
                                <option>Bank BRI ******</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button
                                className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="bg-blue-500 px-6 py-4">
                    <h2 className="text-lg font-medium text-white">DAFTAR WITHDRAW</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaksi ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biaya</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {withdrawalHistory.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.bank}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.fee}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Konfirmasi Penarikan</h2>
                        <p className="text-gray-700">
                            Anda akan menarik sebesar <strong>Rp {amount}</strong> ke rekening <strong>{bank}</strong>.
                        </p>
                        <div className="mt-4 flex justify-end space-x-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-md"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>
            
            )}
        </>
    );
}
