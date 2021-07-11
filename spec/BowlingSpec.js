'use strict';

describe('Bowling', () => {

    let game;

    beforeEach(() => {
       game = new Bowling();
    });

  it('can score 0 points', () => {
      rollMany(0, 20);
      expect(game.score()).toBe(0);
  });

  it('can roll only ones', () => {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
  });

  it('can roll a spare', () => {
     game.roll(2);
     game.roll(8);
     game.roll(2);
     rollMany(0, 17);
     expect(game.score()).toBe(14);
  });

  it('can roll a strike', () => {
    game.roll(10);
    game.roll(8);
    game.roll(1);
    rollMany(0, 16);
    expect(game.score()).toBe(28);
 });

   it('can roll only strikes', () => {
       rollMany(10, 12)
       expect(game.score()).toBe(300);
   });

   let rollMany = function (pins, rolls) {
       for (var i = 0; i < rolls; i++) {
           game.roll(pins);
       }
   };



});