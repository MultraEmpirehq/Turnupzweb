import undrawLogo from "@/assets/images/undrawLogo.png";

export const WelcomeBanner: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-8 mb-8 relative overflow-hidden"
      style={{ backgroundColor: "#024C6B" }}
    >
      <div className="relative z-10">
        <h2 className="text-white text-2xl font-bold mb-2">Hi, John Doe 👋</h2>
        <p className="text-teal-100">Ready to start creating with Turnupz?</p>
      </div>
      <img
        src={undrawLogo.src}
        alt="Illustration"
        className="absolute right-51 bottom-0 w-35 h-auto object-contain"
      />
    </div>
  );
};
