# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'Rubocop Compliance Analysis:' do
  subject(:report) { `rubocop` }

  it 'Has no offenses.' do
    expect(report).to match(/no\ offenses\ detected/)
  end
end
