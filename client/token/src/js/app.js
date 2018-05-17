App = {
  web3Provider: null,
  contracts: {},
  acc:['0x69F8a27E4E172D330711f982Ac6D3566169cF40c', 
  '0x13325b3F6132963BD1bE7a3990EF45136dDc3231',
  '0xD50B5e6F0ce220C284cDBf140328ca19aDc5d8dD',
  '0xc99fa56aFe032CC26781E7fbe874C0a8e8C0E228',
  '0x97fDA0661Ca31207e7ba04177C013266868e1986',
  '0x4C53ad4790daC94d22DC6C374aa41bc270676DC8',
  '0xa7d33A66180656EfB884570549b16b2E074D7a5B',
  '0x8e991edC818A927e76B49aE51500B080477Ef2F5',
  '0x7B77eb6bBD5a9f2adF428526f1ee053048Ce9fF4',
  '0xa1bebA2E636D4696Cf1e8715B0dfaCB22b3f5848'
],

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('TutorialToken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var TutorialTokenArtifact = data;
      App.contracts.TutorialToken = TruffleContract(TutorialTokenArtifact);

      // Set the provider for our contract.
      App.contracts.TutorialToken.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseInt($('#TTTransferAmount').val());
    var toAddress = $('#TTTransferAddress').val();

    console.log('Transfer ' + amount + ' TT to ' + toAddress);

    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.TutorialToken.deployed().then(function(instance) {
        tutorialTokenInstance = instance;

        return tutorialTokenInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  getBalances: function() {
    console.log('Getting balances...');

    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      //window.parent.postMessage(account, '*');
  

      App.contracts.TutorialToken.deployed().then(function(instance) {
        tutorialTokenInstance = instance;
        return tutorialTokenInstance.balanceOf(account);
      }).then(function(result) {
        balance = result.c[0];
        console.log(balance)
        $('#TTBalance').text(balance);
        const count = App.acc.map(e => App.getAllBalances1(e));
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

// 10 balance functions. Not able to get all balances with one function via truffle.

//1



  getAllBalances1: function(acc) {
    console.log('Getting ALL balances...');

    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = acc;
      // window.parent.postMessage(account, '*');
  

      App.contracts.TutorialToken.deployed().then(function(instance) {
        tutorialTokenInstance = instance;
        return tutorialTokenInstance.balanceOf(account);
      }).then(function(result) {
        balance = result.c[0];
        const pepe = {
          account: account,
          balance: balance
        }
        window.parent.postMessage(pepe, '*');
        // $('#TTBalance').text(balance);
        // return App.getAllBalances2()
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },


};


function bindEvent(element, eventName, eventHandler) {
  if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, eventHandler);
  }
}

$(function() {
  $(window).load(function() {
    App.init();
    bindEvent(window, 'message', function (pepe) {
      //results.innerHTML = e.data;
      //console.log(pepe.data);
  });
  });
});
