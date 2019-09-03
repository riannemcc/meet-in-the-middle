require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.new(name: 'Test User', email: 'test@user.com')
  end

  it 'Should be valid.' do
    expect(@user.valid?).to eq true
  end

  describe 'Name Validation:' do
    it 'Name should exist.' do
      @user.name = '      '
      expect(@user.valid?).to eq false
    end

    it "Name shouldn't be too long." do
      @user.name = 'a' * 51
      expect(@user.valid?).to eq false
    end
  end

  describe 'Email Validation:' do
    it 'Email should exist' do
      @user.email = '      '
      expect(@user.valid?).to eq false
    end
  end
end
