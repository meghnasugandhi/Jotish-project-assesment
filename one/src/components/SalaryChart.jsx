import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const SalaryChart = ({ data }) => {
  // Ensure we have data before rendering
  if (!data || data.length === 0) return <p className="text-center p-5">No data available for chart.</p>;

  const chartData = data.slice(0, 10).map(emp => ({
    name: emp.employee_name.split(' ')[0], // Use first name for space
    salary: parseInt(emp.employee_salary)
  }));

  return (
    <div style={{ width: '100%', height: '400px' }}> {/* Ensure height is explicit */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="salary" fill="#0d6efd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;