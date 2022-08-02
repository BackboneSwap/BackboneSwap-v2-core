pragma solidity =0.5.16;
import '../BackboneswapV2Pair.sol';

contract PairCreationCode {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(BackboneswapV2Pair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}