export const Footer = () => {
  return (
    <footer className="border-t py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Auth App. All rights reserved.</p>
      </div>
    </footer>
  );
};
