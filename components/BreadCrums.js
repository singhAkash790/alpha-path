"use client";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";

// Function to convert slug to normal text
const convertSlugToText = (slug) => {
  // Implement your logic to convert the slug to normal text
  // For simplicity, let's just replace hyphens with spaces
  return slug.replace(/-/g, " ");
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {});

export const BreadCrums = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const excludedWords = ["test", "details"];
  const disabledLinks = [
    "organ",
    "conditions",
    "condition",
    "parameter",
    "test-detail",
    "details",
  ]; // Keywords to disable links

  return (
    <>
      {pathname !== "/" ? (
        <section className="position-relative d-contents">
          <div className="container">
            <div role="presentation" className="bread_crums ">
              <Breadcrumbs className="mb-3 " aria-label="breadcrumb">
                <Link href="/">
                  {/* <RiHome2Line /> */}
                  Home
                </Link>
                {pathSegments.map((segment, index) => {
                  const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

                  // Check if the link should be disabled
                  const isDisabled = disabledLinks.includes(segment);

                  // Convert slug to normal text
                  const labelText = convertSlugToText(segment);

                  if (!excludedWords.includes(segment)) {
                    return (
                      <Link
                        key={segment}
                        component={isDisabled ? "span" : "a"}
                        href={isDisabled ? "" : path}
                      >
                        {labelText}
                      </Link>
                    );
                  }

                  return null;
                })}
              </Breadcrumbs>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
