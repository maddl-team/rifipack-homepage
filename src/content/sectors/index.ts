import type { SectorPage } from "./types";
import { packagingLusso } from "./packaging-lusso";
import { packagingCosmetici } from "./packaging-cosmetici";
import { packagingGioielli } from "./packaging-gioielli";
import { packagingAbbigliamento } from "./packaging-abbigliamento";
import { packagingVino } from "./packaging-vino";
import { packagingAlimentareSettore } from "./packaging-alimentare-settore";
import { packagingPizza } from "./packaging-pizza";
import { packagingPasticceria } from "./packaging-pasticceria";
import { packagingEcommerceSettore } from "./packaging-ecommerce-settore";
import { corporateGifting } from "./corporate-gifting";
import { packagingFarmacia } from "./packaging-farmacia";
import { packagingFioristi } from "./packaging-fioristi";
import { packagingEventi } from "./packaging-eventi";
import { packagingRetail } from "./packaging-retail";

/** Registro delle pagine settore. Per aggiungerne una: crea il file e inseriscilo qui. */
export const sectorPages: SectorPage[] = [
  packagingLusso,
  packagingCosmetici,
  packagingGioielli,
  packagingAbbigliamento,
  packagingVino,
  packagingAlimentareSettore,
  packagingPizza,
  packagingPasticceria,
  packagingEcommerceSettore,
  corporateGifting,
  packagingFarmacia,
  packagingFioristi,
  packagingEventi,
  packagingRetail,
];

const bySlug = new Map(sectorPages.map((p) => [p.slug, p]));
export const getSector = (slug: string) => bySlug.get(slug);
