
import { crystal1, crystal2, crystal3, crystal4, crystal5, crystal6, crystal7, crystal8, crystal9, mainCharacter } from "@/images";
import { StaticImageData } from "next/image";

export const ALLOW_ALL_DEVICES = true;

export const WALLET_MANIFEST_URL = "https://coral-ready-capybara-291.mypinata.cloud/ipfs/QmeW4Nn6MZ7i8XtY9NhDgTS9eFvx5quM4FM6Mb1JppU8hS";

export interface LevelData {
  name: string;
  minPoints: number;
  bigImage: StaticImageData;
  smallImage: StaticImageData;
  color: string;
  friendBonus: number;
  friendBonusPremium: number;
}

export const LEVELS: LevelData[] = [
  {
    //L1
    name: "Gms Seed",
    minPoints: 0,
    bigImage: mainCharacter,
    smallImage: crystal1,
    color: "#2adaf8",
    friendBonus: 0,
    friendBonusPremium: 0,
  },
  {
    //L2
    name: "Gms Sprout",
    minPoints: 1000,
    bigImage: mainCharacter,
    smallImage: crystal2,
    color: "#d64767",
    friendBonus: 30,
    friendBonusPremium: 65,
  },
  {
    //L3
    name: "Leaf Bearer",
    minPoints: 3000,
    bigImage: mainCharacter,
    smallImage: crystal3,
    color: "#e9c970",
    friendBonus: 35,
    friendBonusPremium: 75,
  },
  {
    //L4
    name: "Branch of Growth",
    minPoints: 9000,
    bigImage: mainCharacter,
    smallImage: crystal4,
    color: "#73e94b",
    friendBonus: 40,
    friendBonusPremium: 85,
  },
  {
    //L5
    name: "Blooming Grove",
    minPoints: 27000,
    bigImage: mainCharacter,
    smallImage: crystal5,
    color: "#4ef0ba",
    friendBonus: 45,
    friendBonusPremium: 95,
  },
  {
    //L6
    name: "Forest Guardian",
    minPoints: 81000,
    bigImage: mainCharacter,
    smallImage: crystal6,
    color: "#1a3ae8",
    friendBonus: 50,
    friendBonusPremium: 105,
  },
  {
    //L7
    name: "Tree of Life",
    minPoints: 243000,
    bigImage: mainCharacter,
    smallImage: crystal7,
    color: "#902bc9",
    friendBonus: 55,
    friendBonusPremium: 115,
  },
  {
    //L8
    name: "Mystic Oak",
    minPoints: 729000,
    bigImage: mainCharacter,
    smallImage: crystal8,
    color: "#fb8bee",
    friendBonus: 60,
    friendBonusPremium: 125,
  },
  {
    //L9
    name: "Elderwood Sovereign",
    minPoints: 2187000,
    bigImage: mainCharacter,
    smallImage: crystal9,
    color: "#e04e92",
    friendBonus: 65,
    friendBonusPremium: 135,
  }
];

export const DAILY_REWARDS = [
  5,
  7,
  9,
  11,
  13,
  15,
  17,
  19,
  21
];

export const MAXIMUM_INACTIVE_TIME_FOR_MINE = 6*60*60*1000; // 3 hours in milliseconds

export const MAX_ENERGY_REFILLS_PER_DAY = 1;
export const ENERGY_REFILL_COOLDOWN = 0 * 0 * 0; // 1 hour in milliseconds
export const TASK_WAIT_TIME = 0.16 * 60 * 1000; // 1 hour in milliseconds

export const REFERRAL_BONUS_BASE = 20;
export const REFERRAL_BONUS_PREMIUM = 45;


// Multitap
export const multitapUpgradeBasePrice = 0;
export const multitapUpgradeCostCoefficient = 2;

export const multitapUpgradeBaseBenefit = 1;
export const multitapUpgradeBenefitCoefficient = 0;


// Energy
export const energyUpgradeBasePrice = 0;
export const energyUpgradeCostCoefficient = 2;

export const energyUpgradeBaseBenefit = 100;
export const energyUpgradeBenefitCoefficient = 0; 

// Mine (profit per hour)
export const mineUpgradeBasePrice = 0;
export const mineUpgradeCostCoefficient = 0;

export const mineUpgradeBaseBenefit = 0;
export const mineUpgradeBenefitCoefficient = 0;
