import { Link, useNavigate } from "react-router-dom";
export default function LinkButton({ children, to }) {
  const className = "text-sm text-blue-400 hover:text-blue-600 hover:underline";
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
