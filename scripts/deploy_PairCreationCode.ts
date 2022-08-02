import { ethers } from 'hardhat';

async function main() {
    const PairCreationCode = await ethers.getContractFactory("PairCreationCode");
    const pair = await PairCreationCode.deploy();
    await pair.deployed();
    console.log("PairCreationCode init hash:", await pair.getInitHash());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
