import Image from "next/image";
import Link from "next/link";
import { Post } from "@domain";
import { Box } from "./Box";

var image =
  "https://blog.samuelmatos.tech/assets/uploads/posts/banners/Desenvolvimento%20Web%20Completo.jpg";
export async function NavPost() {
  return (
    <Box>
      <div className="flex justify-center gap-8">
        <Link href="#">
          <div className="flex gap-3 text-right">
            <div>
              <h5 className="font-semibold">{"Esse é o titulo da postagem"}</h5>
              <small className="text-gra-400">Postagem Anterior</small>
            </div>

            <div>
              <Image
                src={image}
                width={70}
                height={70}
                alt={`Banner da postagem ${"Esse é o titulo da postagem"}`}
              />
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className="flex gap-3 text-left">
            <div>
              <Image
                src={image}
                width={70}
                height={70}
                alt={`Banner da postagem ${"Esse é o titulo da postagem"}`}
              />
            </div>

            <div>
              <h5 className="font-semibold">{"Esse é o titulo da postagem"}</h5>
              <small className="text-gra-400">Postagem Postagem</small>
            </div>
          </div>
        </Link>
      </div>
    </Box>
  );
}
