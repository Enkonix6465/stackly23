import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function getUserGrowthData(users) {
  const counts = {};
  users.forEach(user => {
    if (user.signupDate) {
      counts[user.signupDate] = (counts[user.signupDate] || 0) + 1;
    }
  });
  // Accumulate growth
  const dates = Object.keys(counts).sort();
  let total = 0;
  const data = dates.map(date => {
    total += counts[date];
    return { date, total };
  });
  return data;
}

export default function UserGrowthGraph({ users, theme }) {
  const data = getUserGrowthData(users);
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
        <XAxis dataKey="date" stroke={theme === "dark" ? "#fff" : "#22223b"} />
        <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
        <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
        <Line type="monotone" dataKey="total" stroke="#1e3a8a" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
