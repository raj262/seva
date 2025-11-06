import { Card } from "@/components/ui/card";

interface ReceiptData {
  receiptId: string;
  bookingId: string;
  date: string;
  devotee: {
    name: string;
    mobile: string;
    gothra: string;
    nakshatra: string;
  };
  sevas: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  advanceAmount?: number;
  balanceAmount?: number;
  paymentMode: string;
  sevaDate: string;
  branch: string;
}

export const ReceiptPrint = ({ data }: { data: ReceiptData }) => {
  return (
    <div className="print-container" style={{ width: '210mm', minHeight: '297mm', padding: '10mm' }}>
      {/* Receipt 1 */}
      <div className="receipt" style={{ height: '140mm', marginBottom: '7mm', border: '2px solid #5c4db8', padding: '8mm' }}>
        <div style={{ textAlign: 'center', borderBottom: '2px solid #5c4db8', paddingBottom: '5mm', marginBottom: '5mm' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#5c4db8', margin: 0 }}>
            🕉️ Sri Vyasaraja Matha
          </h1>
          <p style={{ fontSize: '14px', margin: '2mm 0' }}>Seva Receipt</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '3mm' }}>
            <span><strong>Receipt:</strong> {data.receiptId}</span>
            <span><strong>Booking:</strong> {data.bookingId}</span>
            <span><strong>Date:</strong> {data.date}</span>
          </div>
        </div>

        <div style={{ marginBottom: '4mm' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3mm', fontSize: '13px' }}>
            <div><strong>Devotee:</strong> {data.devotee.name}</div>
            <div><strong>Mobile:</strong> {data.devotee.mobile}</div>
            <div><strong>Gothra:</strong> {data.devotee.gothra}</div>
            <div><strong>Nakshatra:</strong> {data.devotee.nakshatra}</div>
            <div><strong>Branch:</strong> {data.branch}</div>
            <div><strong>Seva Date:</strong> {data.sevaDate}</div>
          </div>
        </div>

        <div style={{ marginBottom: '4mm' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '3mm', textAlign: 'left' }}>Seva</th>
                <th style={{ padding: '3mm', textAlign: 'center' }}>Qty</th>
                <th style={{ padding: '3mm', textAlign: 'right' }}>Price</th>
                <th style={{ padding: '3mm', textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.sevas.map((seva, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '2mm' }}>{seva.name}</td>
                  <td style={{ padding: '2mm', textAlign: 'center' }}>{seva.quantity}</td>
                  <td style={{ padding: '2mm', textAlign: 'right' }}>₹{seva.price}</td>
                  <td style={{ padding: '2mm', textAlign: 'right' }}>₹{seva.price * seva.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderTop: '2px solid #5c4db8', paddingTop: '3mm', marginTop: '3mm' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '2mm' }}>
            <strong>Payment Mode:</strong>
            <span>{data.paymentMode}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
            <span>Total Amount:</span>
            <span style={{ color: '#5c4db8' }}>₹{data.totalAmount}</span>
          </div>
          {data.advanceAmount && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#16a34a' }}>
                <span>Advance Paid:</span>
                <span>₹{data.advanceAmount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#dc2626' }}>
                <span>Balance Due:</span>
                <span>₹{data.balanceAmount}</span>
              </div>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5mm', fontSize: '11px', color: '#666' }}>
          <p style={{ margin: 0 }}>Thank you for your devotion | ಧನ್ಯವಾದಗಳು</p>
          <p style={{ margin: 0 }}>Sri Vyasaraja Matha - Digital Seva Counter</p>
        </div>
      </div>

      {/* Receipt 2 - Duplicate with same content */}
      <div className="receipt" style={{ height: '140mm', border: '2px solid #5c4db8', padding: '8mm' }}>
        <div style={{ textAlign: 'center', borderBottom: '2px solid #5c4db8', paddingBottom: '5mm', marginBottom: '5mm' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#5c4db8', margin: 0 }}>
            🕉️ Sri Vyasaraja Matha
          </h1>
          <p style={{ fontSize: '14px', margin: '2mm 0' }}>Seva Receipt (Office Copy)</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '3mm' }}>
            <span><strong>Receipt:</strong> {data.receiptId}</span>
            <span><strong>Booking:</strong> {data.bookingId}</span>
            <span><strong>Date:</strong> {data.date}</span>
          </div>
        </div>

        <div style={{ marginBottom: '4mm' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3mm', fontSize: '13px' }}>
            <div><strong>Devotee:</strong> {data.devotee.name}</div>
            <div><strong>Mobile:</strong> {data.devotee.mobile}</div>
            <div><strong>Gothra:</strong> {data.devotee.gothra}</div>
            <div><strong>Nakshatra:</strong> {data.devotee.nakshatra}</div>
            <div><strong>Branch:</strong> {data.branch}</div>
            <div><strong>Seva Date:</strong> {data.sevaDate}</div>
          </div>
        </div>

        <div style={{ marginBottom: '4mm' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '3mm', textAlign: 'left' }}>Seva</th>
                <th style={{ padding: '3mm', textAlign: 'center' }}>Qty</th>
                <th style={{ padding: '3mm', textAlign: 'right' }}>Price</th>
                <th style={{ padding: '3mm', textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.sevas.map((seva, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '2mm' }}>{seva.name}</td>
                  <td style={{ padding: '2mm', textAlign: 'center' }}>{seva.quantity}</td>
                  <td style={{ padding: '2mm', textAlign: 'right' }}>₹{seva.price}</td>
                  <td style={{ padding: '2mm', textAlign: 'right' }}>₹{seva.price * seva.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderTop: '2px solid #5c4db8', paddingTop: '3mm', marginTop: '3mm' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '2mm' }}>
            <strong>Payment Mode:</strong>
            <span>{data.paymentMode}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
            <span>Total Amount:</span>
            <span style={{ color: '#5c4db8' }}>₹{data.totalAmount}</span>
          </div>
          {data.advanceAmount && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#16a34a' }}>
                <span>Advance Paid:</span>
                <span>₹{data.advanceAmount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#dc2626' }}>
                <span>Balance Due:</span>
                <span>₹{data.balanceAmount}</span>
              </div>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5mm', fontSize: '11px', color: '#666' }}>
          <p style={{ margin: 0 }}>Thank you for your devotion | ಧನ್ಯವಾದಗಳು</p>
          <p style={{ margin: 0 }}>Sri Vyasaraja Matha - Digital Seva Counter</p>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print-container {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
};
