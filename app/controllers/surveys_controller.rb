class SurveysController < ApplicationController
  def new; end

  def show
    answers = ['O(m | n)', 'sorted', 'Stack', 'stacks', 'O(n)']
    render json: answers == params[:data].values
  end
end
