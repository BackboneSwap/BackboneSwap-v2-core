# Backbone Swap
### Scripts
1. Install packages

```shell
npm install
```
2. Compile Smart Contract
```shell
npx hardhat compile
```
3. Deploy Smart Contract
```shell
npx hardhat run scripts/deploy.ts --network <network name>
```
4. Flatten Smart Contract
```shell
npx hardhat flatten contracts/BackboneswapV2Factory.sol > flattens/BackboneswapV2Factory.sol
npx hardhat flatten contracts/BackboneswapV2Pair.sol > flattens/BackboneswapV2Pair.sol
```