import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/cart",
        "/checkout",
        "/ordine-confermato",
        "/boutique/successo",
        "/boutique/annullato",
        "/area-segreta",
        "/area-segreta/",
        "/pagina-segreta",
        "/pagina-segreta/",
        "/accesso-area-segreta",
      ],
    },
    sitemap: "https://magicocamillo.com/sitemap.xml",
  };
}
