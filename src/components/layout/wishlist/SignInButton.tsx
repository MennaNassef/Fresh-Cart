"use client"
import Link from "next/link";
import { Heart } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignInButton() {
    const router = useRouter();
    const { status } = useSession();
  return (
    <div>
          {/* Sign In (only if NOT logged in) */}
          {status === "unauthenticated" && (
            <button
              onClick={() => router.push("/auth/signin")}
              className="w-72 border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition"
            >
              Sign In
            </button>
          )}
    </div>
  );
}
