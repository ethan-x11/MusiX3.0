use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{self, Token};
use std::mem::size_of;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("AKXGSzURaj4NHr34kfYBYxdf7suCfLYrG6iquS7MBNo3");

const TEXT_LENGTH: usize = 255;
const MUSIC_URL_LENGTH: usize = 255;

#[program]
mod musix {
    use super::*;

    pub fn accept_payment(ctx: Context<PayerContext>) -> ProgramResult {
        let payer_wallet = &mut ctx.accounts.payer_wallet;
        payer_wallet.wallet = ctx.accounts.authority.key();

        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.authority.key(),
            &ctx.accounts.receiver.key(),
            100000000,
        );
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.authority.to_account_info(),
                ctx.accounts.receiver.to_account_info(),
            ],
        )
    }

    pub fn create_music(
        ctx: Context<CreateMusic>,
        title: String,
        music_url: String,
    ) -> ProgramResult{
        let music = &mut ctx.accounts.music;

        music.authority = ctx.accounts.authority.key();
        music.title = title;
        music.music_url = music_url;

        Ok(())
    }
}


#[derive(Accounts)]
pub struct PayerContext<'info> {
    #[account(
        init, 
        seeds = [b"payer".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority, 
        space = size_of::<PayerAccount>() + 8 
    )]
    pub payer_wallet: Account<'info, PayerAccount>,

    #[account(mut)]
    pub receiver: AccountInfo<'info>,

    // Authority
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: UncheckedAccount<'info>,

    // Token
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    //Clock
    pub clock: Sysvar<'info, Clock>,
}

#[account]
pub struct PayerAccount {
    pub wallet: Pubkey,
}

//Create Music Context
#[derive(Accounts)]
pub struct CreateMusic<'info> {
    #[account(
        init, 
        seeds = [b"music".as_ref(), randomkey.key().as_ref()],
        bump,
        payer = authority, 
        space = size_of::<MusicAccount>() + TEXT_LENGTH + MUSIC_URL_LENGTH + 8
    )]

    pub music: Account<'info, MusicAccount>,

    #[account(mut)]
    pub randomkey: AccountInfo<'info>,

    // Authority
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: UncheckedAccount<'info>,

    // Token
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    //Clock
    pub clock: Sysvar<'info, Clock>,

}

#[account]
pub struct MusicAccount {
    pub authority: Pubkey,
    pub title: String,
    pub music_url: String,
}