// # Tactical Design Pattern and idioms: Outside-In

// Model with Abstract Types

type calcRealEstate = (customer: customer) => RealEstateValue;

type RealEstateValue = Money;
type Money = unknown;

type customer = {
  name: Name;
  addressList: Address[];
};

type Address = unknown;
type Name = unknown;