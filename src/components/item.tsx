import Image from "next/image";
import { type TItem } from "@/types/item";
import { urlFor } from "@/utils/sanity-client";

export default function Item(props: TItem) {
  return (
    <div className="m-2 max-w-sm rounded bg-[#dce7ef] p-4 drop-shadow-lg">
      <Image
        src={urlFor(props.image)}
        alt={props.name}
        width={512}
        height={512}
        className="aspect-square rounded"
      />
      <div className="my-4 flex items-center justify-between px-2">
        <div className="text-2xl">{props.name}</div>
        <div className="rounded bg-green-400/60 px-2 text-2xl">
          ₹{props.price}
        </div>
      </div>

      <div className="flex items-center justify-evenly px-2">
        <div className="rounded  bg-green-400/60 p-1 px-2 text-2xl">
          Buy Now
        </div>
        <div className="rounded bg-green-400/60 p-1 px-2 text-2xl">
          Add to cart
        </div>
      </div>
    </div>
  );
}
