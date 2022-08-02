pragma solidity >=0.5.0;

interface IBackboneswapV2Callee {
    function backboneswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
