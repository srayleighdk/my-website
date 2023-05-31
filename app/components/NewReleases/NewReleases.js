"use client";
import NewReleasesProducts from "./NewReleasesProducts";
import { Button } from "flowbite-react";
const NewReleases = () => {
  return (
    <div className="pt-10 p-2 md:px-10 lg:px-20">
      <h2 className="font-bold text-2xl text-center">New Releases</h2>
      <NewReleasesProducts />
      <div className="pt-5">
        <Button outline={true} pill={true} className="mx-auto">
          Shop new releases
        </Button>
      </div>
    </div>
  );
};

export default NewReleases;
