﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Data;


namespace MessageProject.Models
{
    public class CustomSignInManager : SignInManager<User>
    {
        private readonly CustomUserManager _customUserManager;

        public CustomSignInManager(CustomUserManager customUserManager, IHttpContextAccessor contextAccessor, IUserClaimsPrincipalFactory<User> claimsFactory, IOptions<IdentityOptions> optionsAccessor, ILogger<SignInManager<User>> logger, IAuthenticationSchemeProvider schemes, IUserConfirmation<User> confirmation) : base(customUserManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes, confirmation)
        {

            _customUserManager = customUserManager;
        }
        public override async Task<SignInResult> PasswordSignInAsync(string userName, string password,
        bool isPersistent, bool lockoutOnFailure)
        {
            var user = await _customUserManager.FindByNameAsync(userName);
            if (user == null)
            {
                return SignInResult.Failed;
            }
            else
            {
                await SignInAsync( user, isPersistent);
                return SignInResult.Success;
            }                       
        }
    }
}
