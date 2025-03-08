import { Button } from "@/components/ui/button";
import { CrossIcon } from "lucide-react";
import Link from "next/link";

const FailedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-3 rounded-full mb-5">
            <CrossIcon className="size-40 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Unuccessful
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Something Wrong Try Again!!!
          </p>
          <Link href="/" legacyBehavior>
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;
