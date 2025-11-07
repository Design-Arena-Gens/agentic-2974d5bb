'use client';

export default function Home() {
  const channelNames = [
    {
      name: "Tâm Lý Sống",
      reason: "Ngắn gọn, dễ nhớ, thể hiện sự kết nối giữa tâm lý học và cuộc sống hàng ngày"
    },
    {
      name: "Hiểu Về Hành Vi",
      reason: "Tập trung vào mục tiêu chính của kênh - giúp mọi người hiểu về hành vi của bản thân và người khác"
    },
    {
      name: "Tâm Trí Minh Triết",
      reason: "Kết hợp giữa tâm lý và triết lý sống, tạo cảm giác văn minh và sâu sắc"
    },
    {
      name: "Mindful Vietnam",
      reason: "Kết hợp tiếng Anh hiện đại với bối cảnh Việt Nam, thu hút giới trẻ từ 16 tuổi trở lên"
    },
    {
      name: "Sống Tỉnh Thức",
      reason: "Khuyến khích sự nhận thức và hiểu biết bản thân, phù hợp với tâm lý học ứng dụng"
    },
    {
      name: "Chìa Khóa Tâm Lý",
      reason: "Hàm ý kênh sẽ mở ra những hiểu biết sâu sắc về tâm lý con người"
    },
    {
      name: "Hạnh Phúc Từ Hiểu Biết",
      reason: "Thể hiện trực tiếp mục tiêu cuối cùng - mang lại hạnh phúc thông qua hiểu biết tâm lý"
    },
    {
      name: "Decode Bản Thân",
      reason: "Năng động, hiện đại, thu hút giới trẻ với ý nghĩa giải mã chính mình"
    },
    {
      name: "Tâm Lý Thực Tiễn",
      reason: "Nhấn mạnh tính ứng dụng thực tế của tâm lý học trong đời sống"
    },
    {
      name: "Con Người & Hành Vi",
      reason: "Tên học thuật nhưng gần gũi, bao quát nội dung về tâm lý học hành vi"
    }
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>🎬 Gợi Ý Tên Kênh YouTube</h1>
        <p className="subtitle">Tâm lý học hành vi & Ứng dụng trong đời sống</p>
      </div>

      <div className="description">
        <h2>📋 Mô tả kênh của bạn:</h2>
        <ul>
          <li>Đối tượng: Người từ 16 tuổi trở lên</li>
          <li>Nội dung: Tâm lý học hành vi, tâm lý học ứng dụng</li>
          <li>Mục đích: Giúp hiểu về suy nghĩ và hành động của bản thân & người khác</li>
          <li>Giá trị: Cuộc sống văn minh và hạnh phúc hơn</li>
        </ul>
      </div>

      <div className="names-container">
        <h2>💡 10 Gợi Ý Tên Kênh:</h2>
        {channelNames.map((item, index) => (
          <div key={index} className="name-card">
            <div className="name-number">{index + 1}</div>
            <div className="name-content">
              <h3>{item.name}</h3>
              <p>{item.reason}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tips">
        <h2>📌 Lời khuyên khi chọn tên:</h2>
        <ul>
          <li>Kiểm tra tên đã tồn tại trên YouTube chưa</li>
          <li>Chọn tên dễ đọc, dễ nhớ, dễ tìm kiếm</li>
          <li>Phù hợp với phong cách nội dung bạn muốn làm</li>
          <li>Có thể mở rộng ra các nền tảng khác (Facebook, TikTok, Instagram)</li>
          <li>Tránh tên quá dài hoặc khó phát âm</li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .header {
          text-align: center;
          color: white;
          margin-bottom: 40px;
          padding: 40px 20px;
        }

        .header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
          font-size: 1.2em;
          opacity: 0.95;
        }

        .description {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .description h2 {
          color: #667eea;
          margin-bottom: 15px;
        }

        .description ul {
          list-style: none;
          padding: 0;
        }

        .description li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #333;
        }

        .description li:last-child {
          border-bottom: none;
        }

        .names-container {
          margin-bottom: 30px;
        }

        .names-container h2 {
          color: white;
          text-align: center;
          margin-bottom: 25px;
          font-size: 1.8em;
        }

        .name-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .name-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .name-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2em;
          flex-shrink: 0;
          margin-right: 20px;
        }

        .name-content {
          flex: 1;
        }

        .name-content h3 {
          color: #667eea;
          margin: 0 0 10px 0;
          font-size: 1.5em;
        }

        .name-content p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .tips {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .tips h2 {
          color: #667eea;
          margin-bottom: 15px;
        }

        .tips ul {
          list-style: none;
          padding: 0;
        }

        .tips li {
          padding: 12px 0;
          padding-left: 25px;
          position: relative;
          color: #333;
          border-bottom: 1px solid #eee;
        }

        .tips li:last-child {
          border-bottom: none;
        }

        .tips li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          .header h1 {
            font-size: 1.8em;
          }

          .subtitle {
            font-size: 1em;
          }

          .name-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .name-number {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}
