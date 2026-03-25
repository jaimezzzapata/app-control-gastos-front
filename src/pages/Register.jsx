const Register = () => {
  return (
    <div>
      <div class="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
          <div class="flex flex-1 justify-center py-12 md:py-24 px-6">
            <div class="layout-content-container flex flex-col max-w-[480px] flex-1">
              <div class="flex flex-col gap-2 mb-10">
                <h2 class="text-slate-900 text-4xl font-black leading-tight tracking-tight">Create Account</h2>
                <p class="text-slate-500 text-lg font-normal">Join to start tracking your daily expenses.</p>
              </div>
              <form action="#" class="flex flex-col gap-6" method="POST">
                <div class="flex flex-col w-full">
                  <label class="text-slate-900 text-sm font-bold uppercase tracking-wider pb-2">Full Name</label>
                  <input class="form-input flex w-full border-2 border-slate-900 bg-white h-14 px-4 text-slate-900 text-base font-medium rounded-none focus:border-[#006600] transition-colors" placeholder="John Doe" required="" type="text" />
                </div>
                <div class="flex flex-col w-full">
                  <label class="text-slate-900 text-sm font-bold uppercase tracking-wider pb-2">Email Address</label>
                  <input class="form-input flex w-full border-2 border-slate-900 bg-white h-14 px-4 text-slate-900 text-base font-medium rounded-none focus:border-[#006600] transition-colors" placeholder="name@example.com" required="" type="email" />
                </div>
                <div class="flex flex-col w-full">
                  <label class="text-slate-900 text-sm font-bold uppercase tracking-wider pb-2">Password</label>
                  <input class="form-input flex w-full border-2 border-slate-900 bg-white h-14 px-4 text-slate-900 text-base font-medium rounded-none focus:border-[#006600] transition-colors" placeholder="••••••••" required="" type="password" />
                </div>
                <div class="pt-4">
                  <button class="flex w-full items-center justify-center bg-[#006600] text-white h-14 text-base font-bold uppercase tracking-widest rounded-none hover:bg-slate-900 transition-colors" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
              <div class="mt-8 text-center">
                <p class="text-slate-500 text-sm">
                  Already have an account?
                  <a class="text-slate-900 font-bold underline underline-offset-4 hover:text-[#006600] transition-colors" href="#">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register