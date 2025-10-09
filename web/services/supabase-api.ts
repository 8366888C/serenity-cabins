import { notFound } from "next/navigation";
import { supabase } from "./supabase";

// GET
export async function getCabin(name: string) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("name,", name)
    .single();

  if (error) {
    console.log("Supabase error:");
    console.dir(
      {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      },
      { depth: null },
    );
    notFound();
  }

  return data;
}

export async function getCabinPrice(name: string) {
  const { data, error } = await supabase
    .from("cabins")
    .select("regular_price, discount")
    .eq("name", name)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select(
      "id, name, max_capacity, regular_price, discount, description, image_url",
    )
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
