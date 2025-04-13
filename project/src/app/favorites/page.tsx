"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import styles from "@/components/Card.module.css";
import { useRouter } from "next/navigation";

import Image from "next/image";

interface Recipe {
  _id: number;
  title: string;
  ingredientLines: string;
  calories: number;
  url: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Track login status
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } else {
      setIsLoggedIn(false);
      alert("Log in to view your favorites.");
      router.push("/loginpage");
    }
  }, [router]);

  if (isLoggedIn === null) {
    return null; // Wait until we know if the user is logged in or not
  }

  return (
    <section>
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
          {favorites.length === 0 ? (
            <p>
              You have no favorite recipes yet.{" "}
              <Link
                href="/recipes"
                className="inline-block text-black rounded hover:text-blue-600"
              >
                Browse recipes here!
              </Link>
            </p>
          ) : (
            <div className="flex flex-col gap-6">
              {favorites.map((recipe) => (
                <Card key={recipe._id}>
                  <div className={styles.content}>
                    <h1 className={styles.title}>{recipe.title}</h1>
                    <p className={styles.description}>
                      {recipe.calories} calories
                    </p>
                    <p className={styles.description}>
                      {recipe.ingredientLines}
                    </p>
                  </div>
                  <div className={styles.imgwrapper}>
                    <Image
                      src={recipe.url}
                      alt={recipe.title}
                      fill
                      className={styles.img}
                      sizes="(max-width:770px) 100px, 150px"
                    />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
