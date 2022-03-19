const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YourContract", function () {
  let owner, signer1, signer2, signer3;

  before(async () => {
    [owner, signer1, signer2, signer3] = await ethers.getSigners();

    this.YourContract = await ethers.getContractFactory("YourContract");
  })


  beforeEach(async () => {

  })

  it("", async () => {
  });
});
