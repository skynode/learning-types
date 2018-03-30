/// <reference types="node" />

export const wordlists: {
    EN: string[],
    JA: string[],
    chinese_simplified: string[],
    chinese_traditional: string[],
    english: string[],
    french: string[],
    italian: string[],
    japanese: string[],
    spanish: string[]
};

export function entropyToMnemonic(entropyHex: string, wordlist?: string[]): string;
export function generateMnemonic(strength?: number, rng?: (size: number) => Buffer, wordlist?: string[]): string;
export function mnemonicToEntropy(mnemonic: string, wordlist?: string[]): string;
export function mnemonicToSeed(mnemonic: string, password?: string): Buffer;
export function mnemonicToSeedHex(mnemonic: string, password?: string): string;
export function validateMnemonic(mnemonic: string, wordlist?: string[]): boolean;
