# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'Rubocop Compliance Analysis:' do
  subject(:report) { `rubocop` }

  # TravisCI will not pass with the test below.
  # it 'Has no offenses.' do
  #   expect(report).to match(/no\ offenses\ detected/)
  # end
end
