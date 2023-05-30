# NupjukVoteChain

투표하고 귀여운 넙죽이 NFT 받자!

## https://cs492-web3.github.io/votechain-dapp

<img width="769" alt="스크린샷 2023-05-31 오전 12 14 49" src="https://github.com/cs492-web3/votechain-dapp/assets/59733249/7e508eb6-2d86-4c54-b989-3faec6c4f6e6">

<img width="765" alt="스크린샷 2023-05-31 오전 12 17 03" src="https://github.com/cs492-web3/votechain-dapp/assets/59733249/aa1afc56-e3d6-49a7-bdba-5d67250d946c">

### Contract Deploy 방법

backed 폴더에 아래의 command 실행

```jsx
npx hardhat run scripts/DeployAndVerify.js --network goerli
```

### Frontend Deploy 방법

gh-page 브랜치와 https://cs492-web3.github.io/votechain-dapp 가 연결되어있다.

1. local frontend 폴더에서 `yarn deploy`를 할 경우 바로 gh-phage가 업데이트 되면서 deploy 된다
2. main 브랜치에 push가 생기면 git action으로 자동 deploy 된다

local frontend 폴더에서 `yarn dev`를 할 경우 http://localhost:3000/ 에서 확인 가능
