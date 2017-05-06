import delay from './delay';


const subscriptions = [
  {
    id: 'netflix',
    name: 'Netflix'
  },
  {
    id: 'stan',
    name: 'Stan'
  },
  {
    id: 'presto',
    name: 'Presto'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (subscription) => {
  return subscription.firstName.toLowerCase() + '-' + subscription.lastName.toLowerCase();
};

class SubscriptionApi {
  static getAllSubscriptions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], subscriptions));
      }, delay);
    });
  }

  static saveSubscription(subscription) {
	subscription = Object.assign({}, subscription); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSubscriptionNameLength = 3;
        if (subscription.name.length < minSubscriptionNameLength) {
          reject(`Subscription Name must be at least ${minSubscriptionNameLength} characters.`);
        }


        if (subscription.id) {
          const existingSubscriptionIndex = subscriptions.findIndex(s => s.id == subscription.id);
          subscriptions.splice(existingSubscriptionIndex, 1, subscription);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          subscription.id = generateId(subscription);
          subscriptions.push(subscription);
        }

        resolve(subscription);
      }, delay);
    });
  }

  static deleteSubscription(subscriptionId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSubscriptionToDelete = subscriptions.findIndex(subscription => {
          subscription.id == subscriptionId;
        });
        subscriptions.splice(indexOfSubscriptionToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SubscriptionApi;
