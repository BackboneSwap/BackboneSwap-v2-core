import { ethers, run } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("BackboneswapV2Factory");
  const factory = await Factory.connect(signers[0]).deploy(signers[0].address);
  await factory.deployed();
  console.log('BackboneswapV2Factory deployed to: ', factory.address);

  await run("verify:verify", {
    address: factory.address,
    constructorArguments: [signers[0].address],
    contract: 'contracts/BackboneswapV2Factory.sol:BackboneswapV2Factory'
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
