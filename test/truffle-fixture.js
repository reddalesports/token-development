const REDDAL = artifacts.require("Reddal");

module.exports = async () => {
    const token = await REDDAL.new();
    await REDDAL.setAsDeployed(token);
};