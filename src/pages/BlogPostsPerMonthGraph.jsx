import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function getMonthlyBlogCounts(blogs) {
  const counts = {};
  blogs.forEach(blog => {
    if (blog.createdAt) {
      const date = new Date(blog.createdAt);
      const key = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
      counts[key] = (counts[key] || 0) + 1;
    }
  });
  return Object.entries(counts).map(([month, count]) => ({ month, count }));
}

export default function BlogPostsPerMonthGraph({ blogs, theme }) {
  const data = getMonthlyBlogCounts(blogs);
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
        <XAxis dataKey="month" stroke={theme === "dark" ? "#fff" : "#22223b"} />
        <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
        <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
        <Bar dataKey="count" fill="#1e3a8a" />
      </BarChart>
    </ResponsiveContainer>
  );
}
