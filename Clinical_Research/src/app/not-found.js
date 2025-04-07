import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/images/404.png"
                  alt="error"
                  width={440}
                  height={244}
                />

                <h3>Oops! Page Not Found</h3>

                <p>The page you were looking for could not be found</p>

                <Link href="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
