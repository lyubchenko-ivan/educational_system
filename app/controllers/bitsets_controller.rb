class BitsetsController < ApplicationController
  before_action :bitset, only: %w[new show]

  def create
    @bitset.create(bitset_params)

    if bitset.errors.empty?
      redirect_to bitset, success: 'Successfully created!'
    else
      flash[:error] = 'Something went wrong'
      render 'new'
    end
  end

  def update
    bitset.update(bitset_params)
  end

  def new
    @bitset = Bitset.new
  end

  private

  def bitset_params
    params.require(:bitset).permit(:set, :id)
  end

  def bitset
    @bitset ||= current_user.bitset
  end
end
