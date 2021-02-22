// class User{
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created:" + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' payed Invoice');
    };
    return User;
}());
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return member;
}(User));
var usama = new member(1, 'usama', 'usama@gmail.com', 21);
usama.register();
usama.payInvoice();
